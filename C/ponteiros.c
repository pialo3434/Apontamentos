#include <stdio.h>
#include <stdlib.h>

typedef struct obras {
    int id;
    char *titulo;
    double preco;
    char autor[101];
    int Ano;
    char categoria[15];
    char tipo[10];
    int exemplares;
    int exemplares_requisitados;
    int dias_limite;
    int multa;
} Obras;

int main() {
    // Initialize the dynamic array with size 1
    int array_size = 1;
    Obras *obras_array = (Obras *)malloc(array_size * sizeof(Obras));
    int obras_count = 0;

    // While loop (definir quantas vezes quer correr para fazer diversas obras se necessario)
    while (1) {
        //Criar a obra (Obras obra) e definir os atributos da mesma
        Obras obra;
        printf("Enter obra id: ");
        scanf("%d", &obra.id);
        printf("Enter obra titulo: ");
        scanf("%s", obra.titulo);
        printf("Enter obra preco: ");
        scanf("%lf", &obra.preco);
        printf("Enter obra autor: ");
        scanf("%s", obra.autor);
        printf("Enter obra Ano: ");
        scanf("%d", &obra.Ano);
        printf("Enter obra categoria: ");
        scanf("%s", obra.categoria);
        printf("Enter obra tipo: ");
        scanf("%s", obra.tipo);
        printf("Enter obra exemplares: ");
        scanf("%d", &obra.exemplares);
        printf("Enter obra exemplares_requisitados: ");
        scanf("%d", &obra.exemplares_requisitados);
        printf("Enter obra dias_limite: ");
        scanf("%d", &obra.dias_limite);
        printf("Enter obra multa: ");
        scanf("%d", &obra.multa);

        // Adicionar a obra na array (obras_count ira incrementar por cada obra criada)
        obras_array[obras_count] = obra;
        //incrementar
        obras_count++;

        // caso seja necessario expandir o tamanho da array dinamica fazer isso 
        if (obras_count == array_size) {
            array_size *= 2;
            //realocar a memoria com o realloc  
            obras_array = (Obras *)realloc(obras_array, array_size * sizeof(Obras));
        }

        // Sair do loop ou nao 
        printf("Enter 0 to exit, any other number to continue: ");
        int exit_input;
        scanf("%d", &exit_input);
        if (exit_input == 0) {
            break;
        }
    }
}   

