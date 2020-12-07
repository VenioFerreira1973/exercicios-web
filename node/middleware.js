//middleware pattern - chains of responsability
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx,next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx, next) => { 
    ctx.valor3 = 'mid3' 
    next() 
}

const passo4 = ctx => ctx.valor4 = 'mid4' 

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo3, passo4, passo1)
console.log(ctx)
