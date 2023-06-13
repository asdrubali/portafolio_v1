let items = listado;


        //LISTAR GRUPO DE EMBALAJE
        let array = arr.find((val) => val.BlCargoId == this.BlCargoId);
        this.PackagingGroupJson = array.PackagingGroupJson;

        
        
        //LISTAR CLASE DE PELIGRO
        let array2 = items.find((val) => val.BlCargoId == this.BlCargoId);
        this.hazardClassItems = array2.ImdgJson;

        //LISTAR CODIGO DEL IMDG
        let array3 =  this.hazardClassItems.find((val) => val.BlCargoId == this.BlCargoId);
        list.map((item) => {
          if (item[1]) {
            this.imdgCodeItems = array3[item].ImdgJson;
          }
        });
       
         //LISTAR UN NUMBER LIST
        let array4 = this.hazardClassItems.find((val) => val.BlCargoId == this.BlCargoId);
        this.UnNumberJson = array4.UnNumberJson;