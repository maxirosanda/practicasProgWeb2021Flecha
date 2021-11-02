const products = [
    {
       title:"Desodorante",
       price:26.6,
       description:"kjgiljgsijhgsiojhgsoij",
       stock:16,
       img:"./img/perro1.jpg"
   },
   {
       title:"Perfume",
       Price:56.5,
       description:"jghdjghpsog",
       stock:12
   },
   {
     title:"Perfume 2",
       Price:562.5,
       description:"jghdjdsssgghpsog",
       stock:123
   }

]

var product = {
    title:"Perfume 2",
      Price:562.5,
      description:"jghdjdsssgghpsog",
      stock:123
  }

var valorTotal = 120


export const traerInicio = async (req,res)=>{
    res.status(200).render('inicio',{producto:product ,valorfinal:valorTotal})
  
  }

  export const traernosotros = async (req,res)=>{
   
    res.status(200).render('nosotros')
  
  }
  
  