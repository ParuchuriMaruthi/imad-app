var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles={
'articleone':{
    title:'Article one/maruthi',
    heading:'ArticleOne',
    date:'Aug 9,2017',
    content:`<p>this is me who wishing you
        hiiiiiii
        helooo
        gud evening </p>`
    },
'articletwo':{
     title:'Article two/maruthi',
    heading:'Articletwo',
    date:'Aug 9,2017',
    content:`<p>this is me who wishing you
        hiiiiiii
        helooo
        gud evening </p>`
    
},
};
    function createTemplate(data){
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
    
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
<body>
<div class="container">hii everyone
<div>
    <a href="/">HOME</a>
</div>
<div>
   ${date}
</div>
<div>
    <p>
        ${content}
    </p>
</div>
<hr/>
<h3>bye</h3>
</div>
</body>
</html>
`;
return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
    res.send(createTemplate(articles[articlename]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
