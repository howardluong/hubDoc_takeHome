class Work {  //Create our class and name it as instructed

  const success = function(message){
    return message  //We want to have this method invoked with its message when all of our functions have been called serially
  }

//Create an asynchronous function with nightmare as a parameter, this is to assume that we will be invoking the nightmareJS instance
  async function initCompany(nightmare){
    await login(nightmare); //Once we enter the async function we setup our functions to be invoked serially. As instructed, the first two
    await statement(nightmare); //functions will have a parameter and they will both be invoked by nightmareJS instance
    await fetch();
    await success('Retrieval succeeded')
    //Upon reaching this point, we log our success message, which also tells us that the functions have been successfully called serially
  }
}

work()   //Invoke the class function
