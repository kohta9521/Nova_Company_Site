import React from 'react';

// next
import Link from 'next/link';

// clsx
import clsx from 'clsx';

// props
export type ListBlockItemProps = {
    id: string;
    link: string;
    text: string;
}


const ListBlockItem = ({
    id,
    link,
    text
}: ListBlockItemProps) => {
    return (
        <Link
            key={id}
            href={link}
            className={clsx("",)}
        >
            {text}
        </Link>
    )
}

export default ListBlockItem;