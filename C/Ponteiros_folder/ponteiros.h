typedef struct obras
{
    int id;
    char *titulo;
    double preco;
    char autor[101]; 
    int Ano;
    char categoria[15]; 
    char tipo_de_objeto[10]; 
    int exemplares; 
    int exemplares_requisitados;
    int dias_limite;
    int multa;
    //Ligação entre obras
    struct obras *next;
    struct obras *prev;
} Obras;
