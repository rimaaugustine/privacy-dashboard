import {Component, Inject, OnInit} from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {Icons} from '../shared/Icons';
import {IconsService} from '../../services/icons.service';

@Component({
  selector: 'app-dashboard-add',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.css']
})
export class DashboardAddComponent implements OnInit {
  icons = [
    {
      'title': 'Facebook',
      'class': 'fa fa-facebook'
    },
    {
      'title': 'Google',
      'class': 'fa fa-google'
    },
    {
      'title': 'Twitter',
      'class': 'fa fa-twitter'
    },
    {
      'title': 'Tripadvisor',
      'class': 'fa fa-tripadvisor'
    },
    {
      'title': 'LinkedIn',
      'class': 'fa fa-linkedin'
    },
    {
      'title': 'YouTube',
      'class': 'fa fa-youtube'
    },
    {
      'title': 'Instagram',
      'class': 'fa fa-instagram'
    },
    {
      'title': 'Pinterest',
      'class': 'fa fa-pinterest'
    },
    {
      'title': 'Snapchat',
      'class': 'fa fa-snapchat-ghost'
    },
    {
      'title': 'Skype',
      'class': 'fa fa-skype'
    },
    {
      'title': 'Foursquare',
      'class': 'fa fa-foursquare'
    },
    {
      'title': 'SoundCloud',
      'class': 'fa fa-soundcloud'
    },
    {
      'title': 'Yahoo',
      'class': 'fa fa-yahoo'
    },
    {
      'title': 'Spotify',
      'class': 'fa fa-spotify'
    },
    {
      'title': 'WhatsApp',
      'class': 'fa fa-whatsapp'
    },
    {
      'title': 'PayPal',
      'class': 'fa fa-paypal'
    },
    {
      'title': 'Slack',
      'class': 'fa fa-slack'
    },
    {
      'title': 'Telegram',
      'class': 'fa fa-telegram'
    },
    {
      'title': 'Yelp',
      'class': 'fa fa-yelp'
    },
    {
      'title': 'Google Plus',
      'class': 'fa fa-google-plus'
    },
    {
      'title': 'Chrome',
      'class': 'fa fa-chrome'
    },
    {
      'title': 'Stackoverflow',
      'class': 'fa fa-stack-overflow'
    },
    {
      'title': 'Amazon',
      'class': 'fa fa-amazon'
    },
    {
      'title': 'Xing',
      'class': 'fa fa-xing'
    },
    {
      'title': 'Dropbox',
      'class': 'fa fa-dropbox'
    },
    {
      'title': 'Firefox',
      'class': 'fa fa-firefox'
    }
  ];

  limit: number;
  filterText = '';

  constructor(public dialog: MdDialog, private iconsService: IconsService) {
  }

  ServiceDialog(service) {
    let dialogRef = this.dialog.open(DashboardAddNewServiceComponent, {data: service,});
  }

  ngOnInit() {
    // Load books from the books service on init
    this.iconsService.getIcons().subscribe(
      (icons: any[]) => {
        this.icons = icons;
        this.limit = this.icons.length; // Start off by showing all icons on a single page.
      });
  }
}


@Component({
  selector: 'app-dashboard-dashboard-add',
  templateUrl: './dashboard-add-new-service.component.html',
})
export class DashboardAddNewServiceComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }

}
