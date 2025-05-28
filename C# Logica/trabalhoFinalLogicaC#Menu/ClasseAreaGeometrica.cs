using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseAreaGeometrica
    {
        public double GeometricArea()
        {
            Console.Clear();
            Console.WriteLine("Cálculo para área de figuras geométricas\nSelecione sua categoria: \n1. Figura Bidimensional\n2. Figura Tridimensional\n0. Para retornar ao Menu Anterior");
            int opcaoCategoria = Convert.ToInt32(Console.ReadLine());

            switch (opcaoCategoria) //
            {
                case 0:
                    Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                    return 0;

                case 1: //Bidimensional
                    double[] baseAltura = new double[2];


                    Console.WriteLine("Categoria: Figura Bidimensional\nSelecione a figura geométrica cuja área deseja calcular: \n1. Quadrado\n2. Retângulo\n3. Triângulo\n4. Círculo");
                    int opcaoFiguraBidimensional = Convert.ToInt32(Console.ReadLine());
                    if (opcaoFiguraBidimensional == 1) //Quadrado
                    {
                        double areaQuadrado = 0;
                        Console.WriteLine("Área do Quadrado");
                        Console.WriteLine("O Quadrado, por definição geométrica, possui o valor referente a Base idêntico ao da Altura: ");
                        for (int i = 1; i < baseAltura.Length; i++)
                        {
                            Console.WriteLine($"Digite o valor da Base (a Altura terá exatamente o mesmo valor)");
                            baseAltura[i] = Convert.ToDouble(Console.ReadLine());

                            foreach (int numero in baseAltura)
                            {
                                areaQuadrado = baseAltura[i] * baseAltura[i];
                            }
                            Console.WriteLine($"A área de um Quadrado com Base e Altura de {baseAltura[i]} X {baseAltura[i]} é: {areaQuadrado}²");
                            break;
                        }

                        // Console.WriteLine("Primeiro digite o valor referente a Base e por fim o valor referente a Altura: ");
                    }

                   else if (opcaoFiguraBidimensional == 2) //retângulo
                    {
                        double areaRetangulo = 0;
                        Console.WriteLine("Área do Retângulo");
                        Console.WriteLine("O Retângulo, por definição geométrica, possui o valor referente a Base diferente ao da Altura. ");
                        Console.WriteLine("Primeiro digite o valor referente a Base e, por fim, o valor referente a Altura: ");
                        for (int i = 0; i < baseAltura.Length; i++)
                        {
                            Console.WriteLine($"Digite o valor ");
                            baseAltura[i] = Convert.ToDouble(Console.ReadLine());

                            foreach (int numero in baseAltura) //isso aparentemente é desnecessário nesse caso
                            {
                                areaRetangulo = baseAltura[0] * baseAltura[1];
                            }
                        }
                        Console.WriteLine($"A área de um Retângulo com Base e Altura de {baseAltura[0]} X {baseAltura[1]} é: {areaRetangulo}²");
                        break;

                    }

                   else if (opcaoFiguraBidimensional == 3) // triângulo
                    {
                        double areaTriangulo = 0;
                        Console.WriteLine("Área do Triângulo");
                        Console.WriteLine("O Triângulo, por definição geométrica, pode possuir o valor referente a Base igual ou diferente ao da Altura. ");
                        Console.WriteLine("Primeiro digite o valor referente a Base e, por fim, o valor referente a Altura. ");
                        for (int i = 0; i < baseAltura.Length; i++)
                        {
                            Console.WriteLine($"Digite o valor:");
                            baseAltura[i] = Convert.ToInt32(Console.ReadLine());

                            foreach (double numero in baseAltura) //isso aparentemente é desnecessário nesse caso
                            {
                                areaTriangulo = (baseAltura[0] * baseAltura[1]) / 2;
                            }

                        }
                        Console.WriteLine($"A área de um Triângulo com Base e Altura de {baseAltura[0]} X {baseAltura[1]} é: {areaTriangulo}²");
                        break;

                    }

                    else if (opcaoFiguraBidimensional == 4) // círculo
                    {
                        double[] areaCirculoArray = new double[2];
                        areaCirculoArray[1] = 3.14;
                        double areaCirculo = 0;
                        Console.WriteLine("Área do Círculo");
                        Console.WriteLine("O Círculo, por definição geométrica, pode ser medido pelo comprimento de seu Raio ou Diâmetro.\nNesse caso, usaremos apenas o Raio ");
                        Console.WriteLine($"Digite o valor do Raio: ");
                        areaCirculoArray[0] = Convert.ToInt32(Console.ReadLine());
                        areaCirculo = areaCirculoArray[1] * (areaCirculoArray[0] * areaCirculoArray[0]);
                        Console.WriteLine($"A área de um Círculo com Raio de {areaCirculoArray[0]} é: {areaCirculo.ToString("F2")}²");
                    }

                    else
                    {
                        Console.WriteLine("Operação inválida.");
                    }
                    break; //break case 1

                case 2: // tridimensional 
                    int areaTotalVolume;
                    Console.WriteLine("Categoria: Figura Tridimensional:\nSelecione a figura geométrica que deseja calcular:\n1. Cubo\n2. Paralelepípedo\n3. Pirâmide (Tetraedro)\n4. Esfera");
                    int opcaoFiguraTridimensional = Convert.ToInt32(Console.ReadLine());
                    if (opcaoFiguraTridimensional == 1) //cubo
                    {
                        Console.WriteLine("Deseja calcular Área Total ou Volume?\n1. Área Total\n2. Volume");
                        areaTotalVolume = Convert.ToInt32(Console.ReadLine());
                        switch (areaTotalVolume)
                        {
                            case 1:
                                int lado = 6; //número de faces do cubo
                                Console.WriteLine("Calcular Área Total do Cubo");
                                Console.WriteLine("Digite o valor da Base do Cubo (Altura terá um valor idêntico)");
                                int baseCubo = Convert.ToInt32(Console.ReadLine());
                                int areaTotalCubo = lado * (baseCubo * baseCubo); // Fórmula:  6 * (baseCubo²)
                                Console.WriteLine($"Um Cubo com Base e Altura de {baseCubo} possui uma Área Total de: {areaTotalCubo}²");
                                break;

                            case 2:
                                Console.WriteLine("Calcular Volume do Cubo");
                                Console.WriteLine("Digite o valor da base do Cubo (altura e comprimento terão valores idênticos)");
                                baseCubo = Convert.ToInt32(Console.ReadLine());
                                int volumeCubo = baseCubo * baseCubo * baseCubo; // Fórmula: base * altura * comprimento
                                Console.WriteLine($"Um Cubo com base, altura e comprimento de {baseCubo} possui um Volume de: {volumeCubo}³");
                                break;

                                default:
                                Console.WriteLine("Operação inválida");
                                break;
                        }
                    }

                    else if (opcaoFiguraTridimensional == 2) // paralelepípedo
                    {
                        Console.WriteLine("Deseja calcular Área Total ou Volume?\n1. Área Total\n2. Volume");
                        areaTotalVolume = Convert.ToInt32(Console.ReadLine());
                        switch (areaTotalVolume)
                        {
                            case 1:
                                Console.WriteLine("Calcular Área Total do Paralelepipedo (geralmente, base, altura e comprimento terão valores diferentes)");
                                Console.WriteLine("Digite o valor da base do Paralelepipedo");
                                int baseParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Digite o valor da altura do Paralelepipedo");
                                int alturaParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Digite o valor do comprimento do Paralelepipedo");
                                int comprimentoParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                int areaTotalParalelepipedo = (((baseParalelepipedo * comprimentoParalelepipedo) + (baseParalelepipedo * alturaParalelepipedo) + (alturaParalelepipedo * comprimentoParalelepipedo)) * 2); // Fórmula:  2 * (base * altura + (base * comprimento + comprimento * altura)
                                Console.WriteLine($"Um Paralelepípedo com base {baseParalelepipedo}, altura {alturaParalelepipedo} e comprimento {comprimentoParalelepipedo} possui uma Área Total de: {areaTotalParalelepipedo}²");
                                break;

                            case 2:
                                Console.WriteLine("Calcular Volume do Paralelepipedo (geralmente, base, altura e comprimento terão valores diferentes)");
                                Console.WriteLine("Digite o valor da base do Paralelepipedo ");
                                baseParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Digite o valor da altura do Paralelepipedo");
                                alturaParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Digite o valor do comprimento do Paralelepipedo");
                                comprimentoParalelepipedo = Convert.ToInt32(Console.ReadLine());
                                int volumeParalelepipedo = (baseParalelepipedo * comprimentoParalelepipedo * alturaParalelepipedo); // Fórmula:  base * altura * comprimento (igual ao do cubo)
                                Console.WriteLine($"Um Paralelepípedo com base {baseParalelepipedo}, altura {alturaParalelepipedo} e comprimento {comprimentoParalelepipedo} possui uma Área Total de: {volumeParalelepipedo}³");
                                ;
                                break;

                            default:
                                Console.WriteLine("Operação inválida");
                                break;
                        }
                    }


                    else if (opcaoFiguraTridimensional == 3) //tetraedro
                    {
                        Console.WriteLine("Deseja calcular Área Total ou Volume?\n1. Área Total\n2. Volume");
                        areaTotalVolume = Convert.ToInt32(Console.ReadLine());
                        switch (areaTotalVolume)
                        {
                            case 1:

                                Console.WriteLine("Calcular Área Total do Tetraedro (a fórmula só exige comprimento das arestas)");
                                Console.WriteLine("Digite o valor do comprimento das arestas do Tetraedro");
                                double comprimentoTetraedro = Convert.ToDouble(Console.ReadLine());
                                double areaTotalTetraedro = 1.732 * (comprimentoTetraedro * comprimentoTetraedro); // Fórmula:  raiz de 3 * aresta ao quadrado
                                Console.WriteLine($"Um Tetraedro Regular com arestas no valor de {comprimentoTetraedro} possui uma Área Total de: {areaTotalTetraedro.ToString("F2")}²");
                                break;

                            case 2:
                                Console.WriteLine("Calcular Volume do Tetraedro (geralmente, base, altura e comprimento das arestas - terão valores diferentes)");
                                Console.WriteLine("Digite o valor da base do Tetraedro ");
                                double baseTetraedro = Convert.ToDouble(Console.ReadLine());
                                Console.WriteLine("Digite o valor da altura do Tetraedro");
                                double alturaTetraedro = Convert.ToDouble(Console.ReadLine());
                                double areaBaseTetraedro = (baseTetraedro * alturaTetraedro) / 2; //a base do tetraedro regular é um triangulo
                                double volumeTetraedro = (areaBaseTetraedro * alturaTetraedro) / 3; // Fórmula:  (área da base do triângulo * aresta²) /3
                                Console.WriteLine($"Um Tetraedro Regular com base {baseTetraedro} e altura {alturaTetraedro} possui um Volume de: {volumeTetraedro.ToString("F2")}³");
                                break;

                            default:
                                Console.WriteLine("Operação inválida");
                                break;
                        }
                    }
                    else if (opcaoFiguraTridimensional == 4) //esfera
                    {
                        Console.WriteLine("Deseja calcular Área Total ou Volume?\n1. Área Total\n2. Volume");
                        areaTotalVolume = Convert.ToInt32(Console.ReadLine());
                        switch (areaTotalVolume)
                        {
                            case 1:

                                Console.WriteLine("Calcular Área Total da Esfera (a fórmula só exige o valor do raio)");
                                Console.WriteLine("Digite o valor do raio da Esfera");
                                double raioEsfera = Convert.ToDouble(Console.ReadLine());
                                double areaTotalEsfera = 4 * (3.14 * (raioEsfera * raioEsfera)); // Fórmula:  4 * Pi.R ao quadrado
                                Console.WriteLine($"Uma Esfera com raio no valor de {raioEsfera} possui uma Área Total de: {areaTotalEsfera.ToString("F2")}²");
                                break;

                            case 2:
                                Console.WriteLine("Calcular Volume da Esfera");
                                Console.WriteLine("Digite o valor do raio da Esfera ");
                                raioEsfera = Convert.ToDouble(Console.ReadLine());
                                double volumeEsfera = 4.18879 * (raioEsfera * raioEsfera * raioEsfera); // Fórmula: (4/3 * PI) * (raio³)
                                Console.WriteLine($"Uma Esfera com raio {raioEsfera} possui um Volume de: {volumeEsfera.ToString("F2")}³");

                                break;

                            default:
                                Console.WriteLine("Operação inválida");
                                break;
                        }
                    }

                    else 
                    { 
                        Console.WriteLine("Operação Inválida");
                    
                    }


                    break;

                default:
                    Console.WriteLine("Operação inválida");
                    break;

            }
            return 0;

        }
    }
}
