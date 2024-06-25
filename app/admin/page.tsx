import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

const getSalesData = async () => {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true, //count number of rows
  });

  // test for loading wheel
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100, //divide to get dollar amount
    numberOfSales: data._count,
  };
};

const getUserData = async () => {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  // const userCount = await db.user.count();
  // const orderData = await db.order.aggregate({
  //   _sum: { pricePaidInCents: true },
  // });

  return {
    userCount,
    averageValuePerUser:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
  };
};

const getProductData = async () => {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({
      where: { isAvailableForPurchase: true },
    }),
    db.product.count({
      where: { isAvailableForPurchase: false },
    }),
  ]);

  // const activeCount = await db.product.count({
  //   where: { isAvailableForPurchase: true },
  // });
  // const inactiveCount = await db.product.count({
  //   where: { isAvailableForPurchase: false },
  // });

  return { activeCount, inactiveCount };
};

export default async function AdminDashboard() {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);
  // const salesData = await getSalesData();
  // const userData = await getUserData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average Value Per User`}
        body={`${formatNumber(userData.userCount)} Users`}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(
          productData.inactiveCount
        )} Inactive Products`}
        body={`${formatNumber(productData.activeCount)} Active Products`}
      />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
