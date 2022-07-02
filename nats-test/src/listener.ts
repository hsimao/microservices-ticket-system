import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true) // 手動判斷是否接收成功，若失敗將會在 30秒(預設) 後自動找另外的 queue 發送, 直到成功
    .setDeliverAllAvailable() // 每次重啟 listen port 都會重新執行之前執行過的所有 subscrip 任務
    .setDurableName('accounting-service'); // 將會記錄訂閱狀態，有發出去成功後會標記，將在下次重啟時不用在重新發送, 需搭配 setDeliverAllAvailable 一起

  const subscription = stan.subscribe(
    'ticket:created',
    'orders-service-queue-group',
    options
  );

  subscription.on('message', (msg: Message) => {
    const data = msg.getData();

    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }

    msg.ack();
  });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
