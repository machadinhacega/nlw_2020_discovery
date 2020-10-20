// chamando "db" q ta na função "function execute(db)" que ta dentro do arquivo "db.js"
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

// como adicionamos o "async", agora podemos usar uma palavra chamada "await". Isso funciona no lugar do "then" deixando o código mais limpo e organizado
Database.then(async db => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-3.7413226",
    lng: "-38.5416077",
    name: "Fazenda dos Rebeldes",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatsapp: "+5585999945216",
    images: [
            "https://i.pinimg.com/originals/c9/19/ed/c919edda9f435a018726f824c5950634.jpg",

            "https://cdn.cnn.com/cnnnext/dam/assets/180425150504-kids-in-classroom-stock-super-tease.jpg",

            "https://images.theconversation.com/files/344455/original/file-20200629-155316-a4avzx.jpg?ixlib=rb-1.1.0&rect=229%2C6%2C4264%2C2970&q=45&auto=format&w=496&fit=clip",

            "https://www.eatright.org/-/media/eatrightimages/health/weightloss/yourhealthandyourweight/promote-positive-body-image-kids-839295596.jpg",

            "https://cottonongroup.com.au/wp-content/uploads/2019/04/kids-hero.jpg",

            "https://www.rls.org/image/_2016-redesign/internal-pages/kids.jpg"           
        ].toString(),
        instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        opening_hours: "Horário de visitar das 09h até 16h",
        open_on_weekends: "0"
    }
    
);


  // consultar TODOS os dados da tabela
  // o db"all" busca pra gente todos os dados que temos no banco de dados
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages)

//   // consultar somente 1 dado da tabela, pelo ID
//   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "6"');
//   console.log(orphanage)

// //apagar um dado da tabela
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))

// apagar TODOS os dados da tabela
  // console.log(await db.run("DELETE FROM orphanages "))


})
