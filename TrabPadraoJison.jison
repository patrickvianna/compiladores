/* >>> Gramática Léxica <<< */	
%lex

%%

\s+                                 {console.log('BRANCO'); /* ignorar */}
"int"                               {console.log('Token INT'); return 'INT';}
"float"                             {console.log('Token FLOAT'); return;}
"double"                            {console.log('Token DOUBLE'); return;}
"char"                              {console.log('Token CHAR'); return;}
"+"                                 {console.log('Token +'); return '+';}
"-"                                 {console.log('Token -'); return '-';}
"/"                                 {console.log('Token /'); return '/';}
"*"                                 {console.log('Token *'); return '*';}
","                                 {console.log('Token ,'); return ',';}
";"                                 {console.log('Token ;'); return ';';}
"'"                                 {console.log('Token QUOTE'); return 'QUOTE';}
'"'                                 {console.log('Token DQUOTE'); return 'DQUOTE';}
"("                                 {console.log('Token ('); return '(';}
")"                                 {console.log('Token )'); return ')';}
"["                                 {console.log('Token ['); return '[';}
"]"                                 {console.log('Token ]'); return ']';}
"{"                                 {console.log('Token {'); return '{';}
"}"                                 {console.log('Token }'); return '}';}
"<"                                 {console.log('Token <'); return '<';}
">"                                 {console.log('Token >'); return '>';}
"="                                 {console.log('Token ='); return '=';}
"<="                                {console.log('Token LE'); return 'LE';}
">="                                {console.log('Token GE'); return 'GE';}
"=="                                {console.log('Token EQ'); return 'EQ';}
"!="                                {console.log('Token NE'); return 'EN';}
"&&"                                {console.log('Token AND'); return 'AND';}
"||"                                {console.log('Token OR'); return 'OR';}
"!"                                 {console.log('Token NOT'); return 'NOT';}
"if"                                {console.log('Token IF'); return 'IF';}
"else"                              {console.log('Token ELSE'); return 'ELSE';}
"while"                             {console.log('Token WHILE'); return 'WHILE';}
"do"                                {console.log('Token DO'); return 'DO';}
"for"                               {console.log('Token FOR'); return 'FOR';}
"switch"                            {console.log('Token SWITCH'); return 'SWITCH';}
"case"                              {console.log('Token CASE'); return 'CASE';}
"break"                             {console.log('Token BREAK'); return 'BREAK';}
"default"                           {console.log('Token DEFAULT'); return 'DEFAULT';}
"true"                              {console.log('Token TRUE'); return 'TRUE';}
"false"                             {console.log('Tolken FALSE'); return 'FALSE';}
"var"                               {console.log('Token VAR'); return 'VAR';}
"#"                                 {console.log('Token #'); return '#';}
"define"                            {console.log('Token DEFINE'); return 'DEFINE';}
[a-zA-Z][a-zA-Z0-9_]*               {console.log('Token IDF', yytext); return 'IDF';}
[0-9]*\.[0-9]+([eE][+-][0-9]+)?     {console.log('Token F_LIT', yytext); return 'F_LIT';}
[0-9]+                              {console.log('Token INT_LIT', yytext); return 'INT_LIT';}
.                                   {console.log('Erro_léxico: caractere [', yytext, '] não foi reconhecido.');}
<<EOF>>                             {return 'EOF';}


/lex
/* >>> Fim da Gramática Léxica */


/* >>> Start do Parser <<< */
%start expressions


/* >>> Gramática BNF <<< */
%%
expressions
    : e EOF
        // {typeof console !== 'undefined' ? console.log($1) : print($1) ; return $1;}
    ; 

e
    : e INT
    | e FLOAT
    | e DOUBLE
    | e CHAR
    | e '+'
    | e '-'
    | e '/'
    | e '*'
    | e ','
    | e ';'
    | e QUOTE 
    | e DQUOTE 
    | e '('
    | e ')' 
    | e '['
    | e ']'
    | e '{'
    | e '}'
    | e '<'
    | e '>'
    | e '='
    | e '<='
    | e '>='
    | e '=='
    | e '!='
    | e '&&'
    | e '||'
    | e '!'
    | e IF
    | e ELSE
    | e WHILE
    | e DO
    | e FOR
    | e SWITCH
    | e CASE
    | e BREAK
    | e DEFAULT
    | e TRUE
    | e FALSE
    | e VAR
    | e '#'
    | e DEFINE
    | e IDF
    | e F_LIT
    | e INT_LIT
    |
    ;

/* >>> Fim da Gramática BNF <<< */