# S206 - Qualidade de Software - Lista de Exercício
- Repositório para realização da lista de exercícios da disciplina de Qualidade de Software - S206. 
- Instituto Nacional de Telecomunicações - Inatel. 
- Curso: Engenharia de Software Laboratório.
- Monitor: Antônio Victor

O projeto visa testar o site automationpractice.com e navegar por ele como um usuário padrão faria, para poder executar os testes siga os comandos abaixo:

- Clone o projeto na sua máquina local
```
git clone https://github.com/triangulodepascal/S206-L1-Lista1.git
```

- Abra um terminal na pasta do projeto e baixe suas dependências:
```
npm install
```

Para executar os testes pela interface gráfica:
```
./node_modules/.bin/cypress open
```

Para executar os testes por linha de comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
OBS: Ao executar por linha de comando um relatório será disponibilizado na pasta reports e um vídeo da execução será disponibilizado na pasta videos
