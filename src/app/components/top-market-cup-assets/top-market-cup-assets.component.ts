import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Meta, MetaData} from "../../models/meta";
import {AssetsService} from "../../services/assets.service";
import {Assets, AssetsData} from "../../models/assets";

@Component({
  selector: 'app-top-market-cup-assets',
  templateUrl: './top-market-cup-assets.component.html',
  styleUrls: ['./top-market-cup-assets.component.scss']
})
export class TopMarketCupAssetsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MetaData>;
  private metaData: MetaData[] = [];
  dataSource = new MatTableDataSource<MetaData>();
  private symbols: MetaData[] = [];
  private assets: AssetsData = [];

  constructor(public assetsService: AssetsService) {
  }

  displayedColumns: string[] = [
    "name",
    "symbol",
    "circulating_supply",
  ];

  ngOnInit() {
    this.assetsService.getAssets().subscribe(assets => {
      this.assets = assets;
      this.dataSource.data = this.assets;
      console.log(this.assets);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
