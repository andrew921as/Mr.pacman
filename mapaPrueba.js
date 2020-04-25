function createMap(processing, mapa, world){
    forEach(mapa, (row, i) => {
        forEach(row, (cell, j) => {
          if (cell == 0) {
            processing.fill(0, 0, 0);
            processing.rect(j * SIZE, i * SIZE, SIZE, SIZE);
            processing.fill(57, 255, 20);
            processing.ellipse(j * SIZE + SIZE / 2, i * SIZE + SIZE / 2, SIZE / 3, SIZE / 3);
          } if(cell == 1) {
            processing.fill(0, 0, 200);
            processing.rect(j * SIZE, i * SIZE, SIZE, SIZE);
          } if (cell == 2) {
            processing.fill(0, 0, 0);
            processing.image(f1, j * SIZE + 13, i * SIZE + 13);
          } if (cell == 3) {
            processing.fill(0, 0, 0);
            processing.image(f2, j * SIZE + 13, i * SIZE + 13);
          } if (cell == 6) {
            processing.fill(0, 0, 0);
            processing.image(portal, j * SIZE + 5 , i * SIZE + 5 , 40 , 40 );
          } if(cell == 7) {
            processing.fill(0, 200, 200);
            if (world.time % 2 == 0)
              processing.image(cerezas, j * SIZE, i * SIZE +10, 60, 40);
            else
              processing.image(cerezas, j * SIZE, i * SIZE -10, 60, 40);

          } if(cell == 9) {
            processing.fill(0, 200, 200);
            processing.image(f3, j * SIZE + 13, i * SIZE + 13);
          } if(cell == 10) {
            processing.fill(0, 200, 200);
            processing.image(f4, j * SIZE + 13, i * SIZE + 13);
          } if(cell == 8){
            processing.fill(0, 200, 200);
          }
        } );
      });

      if (mapa[0][0] == 1)
        processing.image(bloque, x, y)

  }
  


const mapa=[[5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5],
[5,5,5,1,0,0,0,0,0,0,0,7,1,7,0,0,0,0,0,0,0,1,5,5,5],
[1,1,1,1,0,6,1,0,0,0,0,0,1,0,0,0,0,0,1,6,0,1,1,1,1],
[1,7,0,0,0,1,1,0,1,1,0,0,6,0,0,1,1,0,1,1,0,0,0,7,1],
[1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,1,0,1,0,0,0,7,0,0,0,1,0,1,0,1,0,1,0,1],
[4,0,1,0,1,0,1,0,0,0,1,1,3,1,1,0,0,0,1,0,1,0,1,0,4],
[4,0,0,0,0,0,0,7,1,0,1,2,9,10,1,0,1,7,0,0,0,0,0,0,4],
[4,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,4],
[1,0,1,1,0,1,1,0,0,0,0,0,8,0,0,0,0,0,1,1,0,1,1,0,1],
[1,0,1,7,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,7,1,0,1],
[1,0,0,0,1,0,0,0,1,0,0,0,6,0,0,0,1,0,0,0,1,0,0,0,1],
[1,1,1,1,6,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,6,1,1,1,1],
[5,5,5,1,0,0,0,0,0,0,0,7,1,7,0,0,0,0,0,0,0,1,5,5,5],
[5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5]];

console.log(mapa[13][9]);
console.log(mapa[9][12]);