import Details from '/lib/collections/details';
import Pets from '/lib/collections/pets';

const seed = () => {
  if (Details.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      Details.insert({
        name: `Detail #${i}`
      });
    }
  }
  if (Pets.find().count() === 0) {
    Pets.insert({
      name: `stoli 1`,
      image: `knighttchi-rel.png`
    });
    Pets.insert({
      name: `stoli 2`,
      image: `mametchi-rel.png`
    });
    Pets.insert({
      name: `stoli 3`,
      image: `spaceytchi-rel.png`
    });
  }
}

export default seed;
