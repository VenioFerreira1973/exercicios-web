identificaTriangulo = (lado1, lado2, lado3) => {

    if(lado1 == lado2 && lado2 == lado3){
        console.log('Triângulo Equilatero')
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        console.log('Triângulo Escaleno')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log('Triàngulo Isoceles')
    }
}

identificaTriangulo(3,3,3)
identificaTriangulo(3,4,5)
identificaTriangulo(3,3,5)
identificaTriangulo(3,5,5)
identificaTriangulo(5,5,1)