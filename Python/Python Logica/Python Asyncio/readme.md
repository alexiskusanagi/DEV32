# Domínio de Python Asyncio: Fundamentos 101 

Este repositório contém uma série de exercícios práticos para dominar a programação assíncrona em Python. O foco é entender o **Event Loop**, o gerenciamento de concorrência e a otimização de tempo em tarefas de I/O (entrada/saída).

##  Conceitos Aplicados
- **`async def` / `await`**: Definição de corrotinas e pontos de pausa inteligente.
- **`asyncio.gather()`**: Execução de múltiplas tarefas simultâneas.
- **`asyncio.wait_for()`**: Gerenciamento de timeouts para evitar travamentos.
- **`asyncio.Semaphore()`**: Controle de fluxo para limitação de carga em recursos externos.

---

##  Exercícios e Desafios

### 1. O Garçom Assíncrono (O "Hello World" da Concorrência)
**Objetivo:** Entender a diferença entre execução sequencial e assíncrona.
- **Cenário:** Preparar um café (3s) e uma torrada (5s).
- **Estudo:** No modelo síncrono, levaria 8s. No assíncrono, o tempo total deve ser o da tarefa mais longa (~5s), pois as esperas se sobrepõem.

### 2. O Despacho de 100 Convites (Escalabilidade)
**Objetivo:** Aprender a lidar com grandes volumes de tarefas usando listas e desempacotamento.
- **Cenário:** Enviar 100 e-mails, onde cada um demora 1s de resposta do servidor.
- **Estudo:** Uso do `for` para criar uma lista de corrotinas e o `gather(*tarefas)` para disparar o lote completo. O tempo total cai de 100s para ~1s.

### 3. A Corrida com Timeout (Resiliência)
**Objetivo:** Proteger a aplicação contra falhas externas ou lentidão inesperada.
- **Cenário:** Um processo específico trava ou demora excessivamente.
- **Estudo:** Implementação de `asyncio.wait_for()`. Aprender a capturar a exceção `asyncio.TimeoutError` para que o programa tome uma decisão (cancelar ou ignorar) sem encerrar o fluxo bruscamente.

### 4. O Semáforo de Controle (Boas Práticas de Rede)
**Objetivo:** Limitar a concorrência para não sobrecarregar servidores (Rate Limiting).
- **Cenário:** Baixar 100 arquivos, mas com permissão para apenas 5 conexões simultâneas.
- **Estudo:** Uso de `asyncio.Semaphore(n)`. O programa deve processar em blocos, mantendo a eficiência sem violar as regras de acesso do servidor.

---

## Desafio Final: Monitoramento de Sensores Industrial
**Proposta:** Criar um sistema que monitora 10 sensores de uma fábrica.
- Cada leitura leva 2 segundos.
- O sistema só pode processar **3 leituras por vez** (Semáforo).
- Cada leitura tem um limite de **2.1 segundos** para responder (Timeout).
- **Meta:** O código deve ser robusto o suficiente para reportar quais sensores falharam e quais tiveram sucesso, finalizando em aproximadamente 8 segundos (4 rodadas de processamento).

---

