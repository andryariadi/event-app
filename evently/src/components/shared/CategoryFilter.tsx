"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/category.action";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryFilter() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  //   useEffect(() => {
  //     const delayBounceFn = setTimeout(() => {
  //       let newUrl = "";
  //       if (categories) {
  //         newUrl = formUrlQuery({ params: searchParams.toString(), key: "categories", value: categories });
  //       } else {
  //         newUrl = removeKeysFromQuery({ params: searchParams.toString(), keysToRemove: ["categories"] });
  //       }
  //       router.push(newUrl, { scroll: false });
  //     }, 300);
  //     return () => clearTimeout(delayBounceFn);
  //   }, [categories, searchParams, router]);

  const onSelectCategory = (category: string) => {
    let newUrl = "";
    if (category && category !== "All") {
      newUrl = formUrlQuery({ params: searchParams.toString(), key: "category", value: category });
    } else {
      newUrl = removeKeysFromQuery({ params: searchParams.toString(), keysToRemove: ["category"] });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <Select onValueChange={(value: string) => onSelectCategory(value)}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All" className="select-item p-regular-14">
            All
          </SelectItem>
          {categories.map((category) => (
            <SelectItem key={category._id} value={category.name} className="select-item p-regular-14">
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
