import {
  Box,
  List,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DndContext, PointerSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SideMenuContext } from "../../Context/SideMenuContext";
import { SortableItem } from "../SortableItem/SortableItem";


export default function EditMode2() {
  const { getMenuItems } = useContext(SideMenuContext);
  const [menuList, setMenuList] = useState([]);

  const [dragMeta, setDragMeta] = useState(null);

  const toggleEye = (id) => {
    setMenuList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, visible: !item.visible };
        } else if (item.children) {
          return {
            ...item,
            children: item.children.map((child) =>
              child.id === id ? { ...child, visible: !child.visible } : child
            ),
          };
        } else {
          return item;
        }
      })
    );
  };
  
  

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = menuList.findIndex(item => item.id === active.id);
    const newIndex = menuList.findIndex(item => item.id === over.id);

    setMenuList((items) => arrayMove(items, oldIndex, newIndex));
    setDragMeta({ id: active.id, from: oldIndex, to: newIndex });
  };

  async function getMenuData() {
    let data = await getMenuItems();
    setMenuList(data);
  }

  useEffect(() => {
   
    getMenuData();
  }, []);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Box sx={{ padding: "10px", transition: "all .5s ease-in-out" }}>
        <SortableContext items={menuList.map(item => item.id)} strategy={verticalListSortingStrategy}>
          <List>
            {menuList?.map((item) => (
              <>
              <SortableItem
                key={item.id}
                id={item.id}
                title={item.title}
                visible={item.visible}
                children={item.children}
                target={item.target}
                toggleEye={toggleEye}
                dragMeta={dragMeta}
              />
           
              </>
            ))}
          </List>
        </SortableContext>
      </Box>
    </DndContext>
  );
}
