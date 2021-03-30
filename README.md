Sample Application for User Notification Module

Steps to setup Kafka on local machine ( Instructions for Mac user. User have to find relevant information if their use windows or unix/linus based systems)
1.  Install Kafka of local machine
2.  Start zookeeper on local machine using ``` zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties```
3.  Start Kafka Server using command   ```kafka-server-start /usr/local/etc/kafka/server.properties```
4.  Create topic `user_events` using command ```kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic user_events```
5.  (Only for local testing without app) Start Kafka producer using  ```kafka-console-producer --broker-list localhost:9092 --topic user_events```
6.  (Only for local testing without app) Start Kafka consumer using ```kafka-console-consumer --bootstrap-server localhost:9092 --topic user_events --from-beginning```

Messages sent by producer will be availabe to consumer can consumer can consume it.

