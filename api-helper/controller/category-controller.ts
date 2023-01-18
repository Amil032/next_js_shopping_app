import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../models/Category';
import { connectToDatabase } from '../utils/connectToDataBase';

export const addCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description, icon_source, sub_categories } = req.body;
  let category;
  try {
    category = new Category({ description, icon_source, sub_categories });
    category = await category.save();
  } catch (err) {
    console.log(err);
  }
  if (!category) {
    return res.status(500).json('internal server error');
  }
  return res.status(201).json({ category });
};

export const getAllcategories = async (re: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  let categories;
  try {
    categories = await Category.find();
  } catch (err) {
    console.log(err);
  }
  if (!categories) {
    res.status(500).json({ message: 'internal server error' });
  }
  return res.status(200).json({ categories });
};

export const deleteCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const id = req.body.id;
  let categories;
  try {
    categories = await Category.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!categories) {
    res.status(500).json({ message: 'internal server error or no similar id founds' });
  }
  return res.status(200).json({ message: 'succesfully deleted' });
};
