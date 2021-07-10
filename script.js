var buku=[];

    document.getElementById("add").onclick=function(){
        var titles = document.getElementById("title").value;
        var authors = document.getElementById("penulis").value;
        var tahuns = document.getElementById("tahun").value;
        var statuss = document.getElementById("status").value;
        buku.push(
        {
          title:titles,
          author:authors,
          tahun:tahuns,
          status:statuss
        }
        );
        refresh();
        
        
    }
    document.getElementById("cari").onclick=function(){
        var f= document.getElementById("caris").value;
        document.getElementById("sudah").innerHTML="";
        document.getElementById("belum").innerHTML="";
        for (var i=0;i<buku.length;i++){
        if(f==buku[i]['title']){
          var iDiv = document.createElement('div');
          iDiv.id = 'block';
          iDiv.className = 'block';
          var field = document.createElement('fieldset');
          var swap = document.createElement('button');
          swap.onclick = function(){ubah(i)};
          var deletes = document.createElement('button');
          deletes.onclick = function(){dels()};
          var br1 = document.createElement('br');
          var br2 = document.createElement('br');
          var br3 = document.createElement('br');
          var h1 = document.createElement('h1');
          var judul = document.createTextNode("Judul: "+buku[i]['title']);
          var swaps = document.createTextNode("swap");
          var del = document.createTextNode("Hapus Data");
          var penulis = document.createTextNode("Penulis :"+buku[i]['author']);
          var tahun = document.createTextNode("Tahun :"+buku[i]['tahun']);
          h1.appendChild(judul);
          swap.appendChild(swaps);
          deletes.appendChild(del);
          field.appendChild(h1);
          field.appendChild(penulis);
          field.appendChild(br1);
          field.appendChild(tahun);
          field.appendChild(br2);
          field.appendChild(swap);
          field.appendChild(br3);
          field.appendChild(deletes);
          iDiv.appendChild(field);
          if(buku[i]['status']=="selesai dibaca"){
            document.getElementById("sudah").appendChild(iDiv);
          }
          else{
            document.getElementById("belum").appendChild(iDiv);
          }
        }
        }
        
    }
    function ubah(i){ 
      if(buku[i-1]['status']=="selesai dibaca"){
        buku[i-1]['status']="belum selesai dibaca";
      }
      else{
        buku[i-1]['status']="selesai dibaca";
      }
      refresh();
    }
    function dels(i){
      buku.splice(i-1,1);
      refresh();
    };
    function refresh(){
    document.getElementById("sudah").innerHTML="";
        document.getElementById("belum").innerHTML="";
        for (var i=0;i<buku.length;i++){
          var iDiv = document.createElement('div');
          iDiv.id = 'block';
          iDiv.className = 'block';
          var field = document.createElement('fieldset');
          var swap = document.createElement('button');
          swap.onclick = function(){ubah(i)};
          var deletes = document.createElement('button');
          deletes.onclick = function(){dels()};
          var br1 = document.createElement('br');
          var br2 = document.createElement('br');
          var br3 = document.createElement('br');
          var h1 = document.createElement('h1');
          var judul = document.createTextNode("Judul: "+buku[i]['title']);
          var swaps = document.createTextNode("swap");
          var del = document.createTextNode("Hapus Data");
          var penulis = document.createTextNode("Penulis :"+buku[i]['author']);
          var tahun = document.createTextNode("Tahun :"+buku[i]['tahun']);
          h1.appendChild(judul);
          swap.appendChild(swaps);
          deletes.appendChild(del);
          field.appendChild(h1);
          field.appendChild(penulis);
          field.appendChild(br1);
          field.appendChild(tahun);
          field.appendChild(br2);
          field.appendChild(swap);
          field.appendChild(br3);
          field.appendChild(deletes);
          iDiv.appendChild(field);
          if(buku[i]['status']=="selesai dibaca"){
            document.getElementById("sudah").appendChild(iDiv);
          }
          else{
            document.getElementById("belum").appendChild(iDiv);
          }
        }
    }