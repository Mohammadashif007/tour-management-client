
import Bookings from "@/pages/User/Bookings";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "History",
        items: [
            {
                component: Bookings,
                url: "/user/bookings",
                title: "Bookings",
            },
        ],
    },
];
