Training Container and Virtualization
---

Isi folder

1. ```docker-node``` tutorial deploy node application dengan docker, jalankan command berikut :
    ```
    cd docker-node/
    docker build -t node-app .
    docker run -it --name node-app -p 3000:3000 node-app
    ```
2. ```docker-html``` tutorial deploy html dengan docker dan nginx, jalankan command berikut :
    ```
    cd docker-html/
    docker build -t web-app .
    docker run -it --name web-app -p 8080:80 web-app
    ```
2. ```docker-php``` tutorial penggunaaan docker-compose, jalankan command berikut :
    ```
    cd docker-php/
    docker-compose -f docker-compose.dev.yaml up -d
    ```

