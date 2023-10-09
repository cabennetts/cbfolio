import localFont from 'next/font/local'
 
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const ranade = localFont({ 
    src: [
        {
            path: './Ranade-Variable.ttf',
            weight: '200',
            style: 'light',
        },
        {
            path: './Ranade-Variable.ttf',
            weight: '300',
            style: 'regular',
        },
        {
            path: './Ranade-Variable.ttf',
            weight: '400',
            style: 'medium',
        },
        {
            path: './Ranade-Variable.ttf',
            weight: '600',
            style: 'bold',
        },
    ],
    variable: '--font-ranade',
})
const supreme = localFont({ 
    src: [
        {
            path: './Supreme-Variable.ttf',
            weight: '100',
            style: 'thin',
        },
        {
            path: './Supreme-Variable.ttf',
            weight: '400',
            style: 'regular',
        },
        {
            path: './Supreme-Variable.ttf',
            weight: '500',
            style: 'medium',
        },
    ],
    variable: '--font-supreme',
})
const supremeItalic = localFont({ 
    src: [
        {
            path: './Supreme-VariableItalic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Supreme-VariableItalic.ttf',
            weight: '600',
            style: 'bold-italic',
        },
    ],
    variable: '--font-supreme-italic',
})
const switzer = localFont({ 
    src: [
        {
            path: './Switzer-Variable.ttf',
            weight: '200',
            style: 'extralight',
        },
        {
            path: './Switzer-Variable.ttf',
            weight: '300',
            style: 'light',
        },
        {
            path: './Switzer-Variable.ttf',
            weight: '500',
            style: 'medium',
        },
        {
            path: './Switzer-Variable.ttf',
            weight: '800',
            style: 'extrabold',
        },
    ],
    variable: '--font-switzer',
})
 
export { ranade, supreme, supremeItalic, switzer }