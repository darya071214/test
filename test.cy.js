
describe("Test", () => { 
    it("Проверка контактной информации на сайте ", () => { 
        cy.visit("https://google.com"); 
        
        cy.get("[title='Поиск']").type("Byndyusoft").type("{enter}"); 
        
        cy.get("div#search a").first().click();  
        
        cy.origin('https://byndyusoft.com/', () => {
            cy.get('.knowMore__container .btn').click(); 
        })

        cy.origin('https://byndyusoft.com/', () => {
            if (cy.contains("sales@byndyusoft.com") && cy.get('[href="http://t.me/alexanderbyndyu"]')){
                alert ('Все верно')
            } 
        });
    }); 
});
