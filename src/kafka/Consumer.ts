import {IConsumerConfig, ConsumerConfig, SimpleConsumer} from "kafka-typescript";
import {AppConfig} from '../config/appConfig'
import  rdkafka from "node-rdkafka";
export class Consumer{

 private static  rdkafkaConsumer = rdkafka.KafkaConsumer;

    private static consumer: SimpleConsumer ;
    public static initializeConsumer(){
        if(!Consumer.consumer){
            // TODO: Below code is not working. Library has a bug which need to be worked upon

            // new SimpleConsumer()
            // .create(Consumer.rdkafkaConsumer, AppConfig.TOPIC_NAME, new ConsumerConfig(AppConfig.KAFKA_SERVER_HOST, AppConfig.KAFKA_SERVER_PORT, AppConfig.TOPIC_NAME))
            // .onMessage(({topic, key, value}) =>
            // console.log("Rec'd", topic.toString(), key.toString(), value.toString()))
            // .connect().then(consum =>{
            //     Consumer.consumer = consum;
            // })
        }
    }


}