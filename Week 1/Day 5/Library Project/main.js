class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author=author
        this.isbn = isbn
}
}

class UI{
    constructor(){
        this.form=document.getElementById("form")
        this.tableBody=document.getElementById('table-body')
        this.title=document.getElementById('title-input')
        this.author=document.getElementById('author-input')
        this.isbn=document.getElementById('isbn-input')
        this.form.addEventListener('submit', (e) => onFormSubmit(e))
        this.books = []
       

    }

    
    onFormSubmit(e){
        e.preventDefault(e);
        if (this.title.value == '' || this.author.value == '' || this.isbn.value==''){
            return
        }
        const book = new Book(
            this.title.value,
            this.author.value,
            this.isbn.value
            )
            this.books.push(book)
            this.title.value = ''
            this.author.value= ''
            this.isbn.value= ''
    }

    renderBookTable(){
        this.tableBody.innerHTML = []

        for (i=0; i<this.books.lengths; i++){
            const book = this.books[i]

            this.createTableRow()
        }
    }
    

    createTableRow(book){
        const tr = document.createElement('tr')
        const tdAuthor = document.createElement('td')
        const tdTitle = document.createElement('td')
        const tdIsbn = document.createElement('td')
        const tdActions = document.createElement('td')

        tdTitle.innerHTML = book.title
        tdAuthor.innerHTML = book.author
        tdIsbn.innerHTML = book.isbnb
        tdTitle.innerHTML = book.title

        const actionButtons = this.createActionButtons()
    }

        createActionButtons(){
            const deleteButton = document.createElement('button')
            const editButton = document.createElement('button')
            deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
            deteleButton.innerHTML = 'Delete'
            editButton = document.setAttribute('class','btn btn-warning btn-sm')
            editButton.innerHTML = 'Edit'
            
            deleteButton.addEventListener('click'), ()=> {
                onDeleteButtonClicked()
            }
        }
    }