import { Link, usePage } from '@inertiajs/react';
import {
    ArrowDownToLine,
    ArrowUpFromLine,
    BarChart3,
    BookOpen,
    Box,
    Boxes,
    CheckCircle2,
    CircleX,
    ClipboardList,
    FolderGit2,
    GitBranchPlusIcon,
    LayoutGrid,
    ReceiptText,
    Tags,
    Truck,
    Warehouse,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

export function AppSidebar() {
    const page = usePage();

    const dashboardUrl = page.props.currentTeam? dashboard(page.props.currentTeam.slug): '/';
    const productsUrl = page.props.currentTeam? `/${page.props.currentTeam.slug}/products`: '/';
    const beveragesInStockUrl = page.props.currentTeam?`/${page.props.currentTeam.slug}/beverages/in-stock`:'/'; 
    const beveragesOutStockUrl = page.props.currentTeam?`/${page.props.currentTeam.slug}/beverages/out-of-stock`:'/';
    const categoryUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/categories`:'/';
    const inventoryUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/inventory`:'/';
    const stock_inUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/stock-in`:'/';
    const stock_outUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/stock-out`:'/';
    const suppliersUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/suppliers`:'/';
    const purchase_ordersUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/purchase-orders`:'/';
    const sales_ordersUrl= page.props.currentTeam?`/${page.props.currentTeam.slug}/sales-orders`:'/';
    const invoiceHistoryUrl = page.props.currentTeam? `/${page.props.currentTeam.slug}/invoice-history`: '/';
    const reportsUrl = page.props.currentTeam? `/${page.props.currentTeam.slug}/reports`: '/';

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: dashboardUrl,
            icon: LayoutGrid,
        },
        {
            title: 'Products',
            href: productsUrl,
            icon: Box,
        },
        {
            title: 'Beverages In Stock',
            href: beveragesInStockUrl,
            icon: CheckCircle2,
        },
        {
            title: 'Beverages Out of Stock',
            href: beveragesOutStockUrl,
            icon: CircleX,
        },
        {
            title: 'Categories',
            href: categoryUrl,
            icon: Tags,
        },
        {
            title: 'Inventory',
            href: inventoryUrl,
            icon: Warehouse,
        },
        {
            title: 'Stock In',
            href: stock_inUrl,
            icon: ArrowDownToLine,
        },
        {
            title: 'Stock Out',
            href: stock_outUrl,
            icon: ArrowUpFromLine,
        },
        {
            title: 'Suppliers',
            href: suppliersUrl,
            icon: Truck,
        },
        {
            title: 'Purchase Orders',
            href: purchase_ordersUrl,
            icon: ClipboardList,
        },
        {
            title: 'Sales Orders',
            href: sales_ordersUrl,
            icon: Boxes,
        },
        {
            title: 'Invoice History',
            href: invoiceHistoryUrl,
            icon: ReceiptText,
        },
        {
            title: 'Reports',
            href: reportsUrl,
            icon: BarChart3,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title:"services Selles",
            href:"https://github.com/HengIpor90/ecosystem-omnihub-cambodia.git",
            icon:GitBranchPlusIcon,
        },
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: FolderGit2,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboardUrl} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <TeamSwitcher />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
