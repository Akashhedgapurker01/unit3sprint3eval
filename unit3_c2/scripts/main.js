function userData(){

    let obj={
         name : user.name.value,
         email : user.email.value,
         address : user.address.value,
         wallet : user.amount.value,

    }
    localStorage.setItem("user", JSON.stringify(obj));
    window.location.reload();
}