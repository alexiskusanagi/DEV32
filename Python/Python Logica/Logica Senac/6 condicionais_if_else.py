# atenção para a identação visto que não há {} no if/else
# em python else if é abreviado para elif

verifica =1 
verificafalse =2

if verifica == 1 and verificafalse == 2:
    print("entou no if")
    print("vou modificar a variável, verifica agora vai receber 3")
    verifica==3
else:
    print("entrou no else")  
if verifica == 3:
    print("entou no if, verificafalse = 1")
elif verifica==3:
    print("entrou no elif")
else:
    print("entrou no ultimo else")        
