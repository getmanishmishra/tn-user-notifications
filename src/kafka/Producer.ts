import {IProducerConfig, ProducerConfig, SimpleProducer} from "kafka-typescript"
import {AppConfig} from '../config/appConfig'
import  rdkafka from "node-rdkafka";
import {UUIDGen} from '../common/UUIDGenerator'
import {APIError} from '../exceptions/APIError'
import { HttpStatusCode } from "../exceptions/HttpStatusCode";





export class Producer{

    private static  rdkafkaProducer = rdkafka.Producer
    private static producer: SimpleProducer ;
    public static initializeProducer(){
        if(!Producer.producer){
            new SimpleProducer()
            .create(Producer.rdkafkaProducer, new ProducerConfig(AppConfig.KAFKA_SERVER_HOST, AppConfig.KAFKA_SERVER_PORT))
            .connect().then(prodc =>{
                prodc.setTopic(AppConfig.TOPIC_NAME);
                Producer.producer = prodc;
            })
        }
    }


    public static pushMessage(message:string):string{
         const uuid  = UUIDGen.generateUUID();
        try{
            if(!Producer.producer){
                console.log("producer is undefined. Initializingit .");
                console.log("Kafka queue details are : ", AppConfig.KAFKA_SERVER_HOST, AppConfig.KAFKA_SERVER_PORT, AppConfig.TOPIC_NAME)
                new SimpleProducer()
                .create(Producer.rdkafkaProducer, new ProducerConfig(AppConfig.KAFKA_SERVER_HOST, AppConfig.KAFKA_SERVER_PORT))
                .connect().then(prodc =>{
                    prodc.setTopic(AppConfig.TOPIC_NAME);
                    Producer.producer = prodc;
                    Producer.producer.send(uuid, Buffer.from(message));
                })
            }else{
                Producer.producer.send(uuid, Buffer.from(message));
            }
        }catch(error){

            console.error(error);
            throw new APIError(
                'NOT FOUND',
                HttpStatusCode.NOT_FOUND,
                true,
                'detailed explanation'
              )
        }
        return uuid
    }



}

