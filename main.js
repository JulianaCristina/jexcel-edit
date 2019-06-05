$(document).ready(function(){
    let data = [
            ['jExcel', 'Jquery spreadsheet, javascript spreadsheet, jquery', 181],
            ['Handsontable', 'Another nice javascript spreadsheet plugin', 9284],
            ['Datatables', 'DataTables is a table enhancing plug-in for the jQuery library.', 'dition: Standard Edition\nSpyro`s back and he`s all scaled up!\nThe original roast master is back! Same sick burns, same smoldering attitude, now all scaled up in stunning HD. Spyro is bringing the heat like never before in the SpyroTM Reignited Trilogy game collection\nAll 3 original Spyro games fully remastered in HD\nIncludes Spyro the Dragon, Spyro 2: Ripto`s Rage! and Spyro: Year of the Dragon\n\n100+ levels, remastered with breathtaking graphical updates and improved gameplay controls'],
    ];
    
    $('#my').jexcel({
        data:data, 
    
        colWidths: [ 300, 80, 100 ],
        colHeaders: ['Código', 'Unidade', 'Marca', 'Categoria', 'Nome', 'Descrição', 'Preço Unitário'], 
        columns: [
            { type:'text' },
            { type:'text' },
            { type:'text', wordWrap:true },
            ]
        });
});