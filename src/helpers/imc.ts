export type Level = {
    title: string,
    color: string,
    imc: number[],
    yourIMC?: number,
}

export const levels = [
    {title: 'Magreza', color: '#96A3AB', imc: [0, 18.5], yourIMC: 0},
    {title: 'Normal', color: '#0EAD69', imc: [18.6, 24.9], yourIMC: 0},
    {title: 'Sobrepeso', color: '#E2B039', imc: [25, 30], yourIMC: 0},
    {title: 'Obesidade', color: '#C3423F', imc: [30.1, 99], yourIMC: 0}
];

export const calculateIMC = (height: number, weight: number) => {
    
    const imc = weight / (height * height);

    for (let i in levels){
        if(imc >= levels[i].imc[0] && imc< levels[i].imc[1]){
            levels[i].yourIMC = imc;
            return levels[i];
        }
    }

    return null;
}