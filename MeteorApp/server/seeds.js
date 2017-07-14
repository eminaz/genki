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
      image: `https://s3-us-west-2.amazonaws.com/genki.ihealthnext.com/pets/knighttchi-rel.png`,
      selected: false
    });
    Pets.insert({
      name: `stoli 2`,
      image: `https://s3-us-west-2.amazonaws.com/genki.ihealthnext.com/pets/mametchi-rel.png`,
      selected: false
    });
    Pets.insert({
      name: `stoli 3`,
      image: `https://s3-us-west-2.amazonaws.com/genki.ihealthnext.com/pets/spaceytchi-rel.png`,
      selected: false
    });
  }
}

export default seed;
