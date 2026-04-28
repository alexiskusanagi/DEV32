from fastapi import FastAPI, HTTPException, Depends
from decimal import Decimal
from sqlalchemy.orm import Session
from database import engine, Base, get_db
import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
async def home():
    return {"mensagem": "Ledger API Online", "status": "Conectado ao Postgres"}

@app.get("/simular-saldo")
async def saldo():
    return {"conta": "12345-6", "saldo": Decimal("1500.50")}

@app.post("/contas/")
async def criar_conta(titular: str, saldo_inicial: Decimal, db: Session = Depends(get_db)):
    nova_conta = models.Conta(titular=titular, saldo=saldo_inicial)
    db.add(nova_conta)
    db.commit()
    db.refresh(nova_conta)
    return nova_conta

@app.get("/saldo/{conta_id}")
async def buscar_saldo(conta_id: int, db: Session = Depends(get_db)):
    conta = db.query(models.Conta).filter(models.Conta.id == conta_id).first()
    if not conta:
        raise HTTPException(status_code=404, detail="Conta não encontrada no Ledger")
    return {
        "id": conta.id,
        "titular": conta.titular,
        "saldo": conta.saldo,
        "mensagem": f"Saudações, {conta.titular}"
    }
