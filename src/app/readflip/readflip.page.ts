import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-readflip',
  templateUrl: './readflip.page.html',
  styleUrls: ['./readflip.page.scss'],
})

export class ReadflipPage implements OnInit {
  public text = `
    <img src="https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <b>Lorem ipsum dolor sit, </b>amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.<img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel<img src="https://images.pexels.com/photos/2376996/pexels-photo-2376996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />  placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, autem eum, hic ipsam vel tenetur at sunt aliquid incidunt accusantium, soluta minus ipsa non nam quod asperiores officiis cumque amet.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit, ut corporis odit, minus vel placeat expedita dolore enim deserunt sunt dolorum ad blanditiis sint aut animi, eum eveniet temporibus.
  `
  public push = 0
  public currentPage = 1
  public pages = 1
  public loadedWidth = '0'
  public loadedWidth_ = '0'
  public width_ = '0'
  public visibility = 'hidden'
  public loading = true
  
  @ViewChild("page", null) page: ElementRef;
  @ViewChild("story", null) story: ElementRef;
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.page.nativeElement.innerHTML = this.text
  }

  ionViewDidEnter() {
    this.width_ = `${this.page.nativeElement.clientWidth}px`
    setTimeout(() => {
      this.getWidth()
      this.loading = false
      this.visibility = 'visible'
    }, 3000);
  }
  
  logg() {
    console.log(this.page)
  }

  getWidth() {
    this.pages = this.page.nativeElement.scrollWidth / this.page.nativeElement.clientWidth
    console.log(this.page.nativeElement.clientWidth, this.page.nativeElement.scrollWidth)
    this.loadedWidth = `${100 * this.currentPage / this.pages}%`
  }

  back() {
    this.navCtrl.back()
  }

  slide(e) {
    if (e.x > (this.page.nativeElement.clientWidth / 2)) {
      this.page.nativeElement.scrollLeft += this.page.nativeElement.clientWidth
      if (this.currentPage <= this.pages) this.currentPage += 1
    } else {
      this.page.nativeElement.scrollLeft -= this.page.nativeElement.clientWidth
      if (this.currentPage > 1) this.currentPage -= 1
    }
    this.getWidth()
  }

}
