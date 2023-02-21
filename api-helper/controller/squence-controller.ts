import SquenceSchema from '../models/Squence';
import { connectToDatabase } from '../utils/connectToDataBase';
export const createSquence = async (id:string) => {
  try {
    let z = await SquenceSchema.findOneAndUpdate({ id: id }, { $inc: { seq: 1 } });
    console.log(z, 'zzz');
    if (!z) {
      console.log(z, 'inside');
      const newINs = new SquenceSchema({ id: id, seq: 1 });
      let k = await newINs.save();
      return k;
    }
    return z;
  } catch (error) {
    console.log(error, 'asasasasasasasasa');
  }
};
