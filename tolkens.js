// mygenerator.js
var Parser = require("jison").Parser;
 
// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
            ["\\s+"                         , "/* skip whitespace */"],
            ["int"                          , "return 'INT'"],
            ["float"                        , "return 'FLOAT'"],
            ["double"                       , "return 'DOUBLE'"],
            ["char"                         , "return 'CHAR'"],
            ["\\+"                          , "return '+'"],
            ["\\-"                          , "return '-'"],
            ["\\/"                          , "return '/'"],
            ["\\*"                          , "return '*'"],
            [","                            , "return ','"],
            [";"                            , "return ';'"],
            ["\\'"                          , "return '\\''"],
            ["\""                           , "return '\"'"],
            ["\\("                          , "return '('"],
            ["\\)"                          , "return ')'"],
            ["\\["                          , "return '['"],
            ["\\]"                          , "return ']'"],
            ["\\{"                          , "return '{'"],
            ["\\}"                          , "return '}'"],
            ["<"                            , "return '<'"],
            [">"                            , "return '>'"],
            ["="                            , "return '='"],
            ["<="                           , "return '<='"],
            [">="                           , "return '>='"],
            ["=="                           , "return '=='"],
            ["!="                           , "return '!='"],
            ["&&"                           , "return '&&'"],
            ["\\|\\|"                       , "return '||'"],
            ["!"                            , "return '!'"],
            ["if"                           , "return 'IF'"],
            ["switch"                       , "return 'SWITCH'"],
            ["case"                         , "return 'CASE'"],
            ["break"                        , "return 'BREAK'"],
            ["default"                      , "return 'DEFAULT'"],
            ["else"                         , "return 'ELSE'"],
            ["while"                        , "return 'WHILE'"], 
            ["for"                          , "return 'FOR'"], 
            ["Variável"                     , "return 'VAR'"], 
            ["do while"                     , "return 'DO WHILE'"], 
            ["#"                            , "return '#'"], 
            ["define"                       ,"return 'DEFINE'"],
            ["(_|[a-zA-Z])(_*[a-zA-Z0-9]*)*", "return 'IDF'"],
            ["[0-9]+\\.[0-9]+"              ,"return 'F_LIT';"],
            ["[0-9]+"                       ,"return 'INT_LIT';"],
        ]
    },
 
    "bnf": {
        "expressions": [
            ["INT"                          , "console.log('int ')"],
            ["FLOAT"                        , "console.log('float ')"],
            ["DOUBLE"                       , "console.log('double ')"],
            ["CHAR"                         , "console.log('char ')"],
            ["+"                            , "console.log ('+ ')"],
            ["-"                            , "console.log('- ')"],
            ["/"                            , "console.log('/ ')"],
            ["*"                            , "console.log('* ')"],
            [","                            , "console.log(', ')"],
            [";"                            , "console.log ('; ')"],
            ["'"                            , "console.log ('\\' ')"],
            ["\""                           , "console.log('\" ')"],
            ["("                            , "console.log('( ')"],
            [")"                            , "console.log(') ')"],
            ["["                            , "console.log('[ ')"],
            ["]"                            , "console.log('] ')"],
            ["{"                            , "console.log('{ ')"],
            ["}"                            , "console.log('} ')"],
            ["=="                           , "console.log('== ')"],
            ["!="                           , "console.log('!= ')"],
            ["<="                           , "console.log('<= ')"],
            [">="                           , "console.log('>= ')"],
            ["<"                            , "console.log('< ')"],
            [">"                            , "console.log('> ')"],
            ["="                            , "console.log('= ')"],
            ["&&"                           , "console.log('&& ')"],
            ["||"                           , "console.log('|| ')"],
            ["!"                            , "console.log('! ')"],
            ["IF"                           , "console.log('if ')"],
            ["SWITCH"                       , "console.log('switch ')"],
            ["DEFAUT"                       , "console.log('default')"],
            ["ELSE"                         , "console.log('else ')"],
            ["WHILE"                        , "console.log('while ')"],
            ["FOR"                          , "console.log('for ')"],
            ["VAR"                          , "console.log('Variável ')"],
            ["DO WHILE"                     , "console.log('do while ')"],
            ["#"                            , "console.log('#')"], 
            ["DEFINE"                       , "console.log('define ')"],
            ["IDF"                          , "console.log($1+' ')"],
            ["F_LIT"                        , "console.log($1 + ' ')"],
            ["INT_LIT"                      , "console.log($1+' ')"],
        ],
    }
};

var parser = new Parser(grammar);
var parserSource = parser.generate();
 

var source = "float i = 8.6 ;" ;
teste = source.split(" ");
for (let j in teste){
        parser.parse(teste[j]);
}
console.log(teste);

 
var source = "int k = 5 ;"; // aceita

//var source = " k = 5 ;"; // recusa

conteste = source.split(" ");

for (let j in teste){
        parser.parse(conteste[j]);

}


