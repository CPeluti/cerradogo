# cerradogo
## Como instalar
- Subir banco de dados mongo na atlas

- Criar .env na pasta do backend com:
```
EXPIRESIN=30000
PORT=3030
DB_USERNAME=<usuario do mongodb>
DB_PASSWORD=<senha do mongodb>
```
- Instalar node 16.14.0

- Instalar yarn globalmente
`npm install -g yarn`

- Baixar todas as dependencias do frontend e do backend
```
cd backend
yarn
cd ../frontend
yarn
```
- Executar frontend e backend em terminais separados
```
cd frontend
yarn dev
```
```
cd backend
yarn dev
```
### lembrando que deve-se acessar o frontend pelo localhost:5173
