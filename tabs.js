const tabs = document.querySelectorAll('.tab')

tabs.forEach( (tab) => {
    tab.addEventListener('click', e => {
        tabs.forEach( (item) => {
            item.classList.remove('active')
        })


        tab.classList.add('active')
        let targetId = e.target.dataset.id
        switch (targetId) {

            case 'all':
                spreader('product') 
            break

            case 'drinks':
                spreader(targetId) 
            break
            
            case 'sandwiches':
                spreader(targetId) 
            break

            case 'breadmade':
                spreader(targetId) 
            break

            case 'sweets':
                spreader(targetId) 
            break
            
            case 'cooked':
                spreader(targetId) 
            break
        }

        function spreader(className) {
            setTimeout(() => {
                const products = document.querySelectorAll('.product')
                products.forEach( (product) => {
                    if (product.classList.contains(className)) {
                        product.classList.remove('active')
                    }

                    else {
                        product.classList.add('active') 
                    }
                })
            }, 10);
        }
    })

    
})

