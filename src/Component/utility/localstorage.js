const getStoredBookApplication = () =>{
    const storedBookApplication = localStorage.getItem('book-applications');
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);
    }
    return [];
}

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveBookApplication = id =>{
    const storedBookApplications = getStoredBookApplication();
    const exists = storedBookApplications.find(bookId => bookId === id);
    if(!exists){
        storedBookApplications.push(id);
        localStorage.setItem('book-applications', JSON.stringify(storedBookApplications))
    }
}

const saveWishlist = id => {
    const storedWishlist = getStoredWishlist();
    const exists = storedWishlist.find(bookId => bookId === id);
    if(!exists){
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
    }
}

export { getStoredBookApplication, saveBookApplication, getStoredWishlist, saveWishlist}