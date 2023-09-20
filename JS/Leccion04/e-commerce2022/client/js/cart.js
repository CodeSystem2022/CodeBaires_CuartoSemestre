const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const displayCart = ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText ="❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click",() => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    if (cart.length > 0) {
        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
            <div class="quantity">
                <span class="quantity-btn-decrease">-</span>
                <span class="quantity-input">${product.quantity}</span>
                <span class="quantity-btn-increase">+</span>
            </div>
                <div class="price">${product.price * product.quantity} $</div>
                <div class="delete-product">❌</div>
            </div>
            `;
            modalContainer.append(modalBody);
    
            const decrease = modalBody.querySelector(".quantity-btn-decrease");
            decrease.addEventListener("click", () => {
                if(product.quantity !== 1){
                    product.quantity --;
                    displayCart();
                    displayCartCounter();
                }
            });
    
            const increase = modalBody.querySelector(".quantity-btn-increase");
            increase.addEventListener("click", () => {
                product.quantity ++;
                displayCart();
                displayCartCounter();
            });
    
            //delete
            const deleteProduct = modalBody.querySelector(".delete-product");
            deleteProduct.addEventListener("click",()=>{
                deleteCartProduct(product.id);
            });
        });
    
        //modal footter
        const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    
        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
        <div class="total-price">Total:${total}</div>
        <button class="btn-primary" id="checkout-btn">go to checkout</button>
        <div id="button-checkout"></div>
        `;
        modalContainer.append(modalFooter);
    } else {
        const modalText = document.createElement("h2");
        modalText.className = "modal-body";
        modalText.innerText = "your cart is empty";
        modalContainer.append(modalText);
    }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct =(id)=>{
    const foundId = cart.findIndex((element)=> element.id === id);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter = () => {
    const cartLenght = cart.reduce( (acc, el) => acc + el.quantity, 0);
    if(cartLenght > 0){
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLenght;
    }else{
        cartCounter.style.display = "none";
    }
};
