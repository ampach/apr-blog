import Link from 'next/link';
import {useEffect, useState} from 'react';

const menuItemCssClassActive = "inline-block py-2 px-4 text-black font-bold no-underline";
const menuItemCssClass = "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4";

type NavMenuProps = {
  items: any;
  currentSlug: string
}

const NavMenu : React.FC<NavMenuProps> = ({items, currentSlug}) => {
  
  return ( 
  <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4">    
      {      
       items && items?.links?.items.map((item, key) => (                    
            <li key={key}> 
              <Link href="/[[...slug]]" as={item.slug && item.slug.length > 0 ? item.slug : item.link.slug}>
                <a className={(item.slug && item.slug.length > 0 ? item.slug : item.link.slug) == currentSlug ? menuItemCssClassActive : menuItemCssClass}>
                  {item.title}
                </a>
              </Link> 
            </li>
          ))
        }
  </ul>
)};

export default NavMenu;
