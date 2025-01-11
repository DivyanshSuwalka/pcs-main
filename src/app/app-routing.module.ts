import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicPartnersComponent } from './academic-partners/academic-partners.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BfsComponent } from './bfs/bfs.component';
import { CareersComponent } from './careers/careers.component';
import { CareersatpcsglobalComponent } from './careersatpcsglobal/careersatpcsglobal.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ClassroomTrainingComponent } from './classroom-training/classroom-training.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporatePartnersComponent } from './corporate-partners/corporate-partners.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { EmployeeSpeakComponent } from './employee-speak/employee-speak.component';
import { FoundarMessageComponent } from './foundar-message/foundar-message.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IndustryComponent } from './industry/industry.component';
import { LegalTeamComponent } from './legal-team/legal-team.component';
import { LifescienceComponent } from './lifescience/lifescience.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { OnlineTrainingComponent } from './online-training/online-training.component';
import { OrgThemeVideoComponent } from './org-theme-video/org-theme-video.component';
import { PartnersComponent } from './partners/partners.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PlatformForFreshersComponent } from './platform-for-freshers/platform-for-freshers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectTrainingComponent } from './project-training/project-training.component';
import { ServicesComponent } from './services/services.component';
import { TalentOutsourcingComponent } from './talent-outsourcing/talent-outsourcing.component';
import { TrainingComponent } from './training/training.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { WeekendTrainingComponent } from './weekend-training/weekend-training.component';
import { WorkCultureComponent } from './work-culture/work-culture.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { DeveloperTeamComponent } from './developer-team/developer-team.component';
import { HireDevelopersComponent } from './hire-developers/hire-developers.component';
import { TcsNinjaTestPreparationComponent } from './tcs-ninja-test-preparation/tcs-ninja-test-preparation.component';
import { YouthEmployeebilityProgramComponent } from './youth-employeebility-program/youth-employeebility-program.component';
import { WebinarComponent } from './webinar/webinar.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  /*{path: '/about-us', redirectTo:'/about-us', pathMatch: 'full'},
  {path: '/about-us', redirectTo:'about-us', pathMatch: 'full'},
  {path: '/partners', redirectTo:'/partners', pathMatch: 'full'},
  {path: '/partners', redirectTo:'partners', pathMatch: 'full'},
  {path: '/corporate', redirectTo:'corporate', pathMatch: 'full'},
  {path: '/corporate', redirectTo:'corporate', pathMatch: 'full'},
  */
  {path: 'home',component: HomeComponent},
  {path: 'partners',component: PartnersComponent},
  {path: 'corporate',component:CorporatePartnersComponent},  
  {path: 'academic-partners',component:AcademicPartnersComponent},  
  {path: 'about-us',component: AboutUsComponent},
  {path: 'hire-developers', component:HireDevelopersComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'industry', component:IndustryComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'analytics', component:AnalyticsComponent},
  {path: 'careers', component:CareersComponent},
  {path: 'careers-at-pcsglobal', component:CareersatpcsglobalComponent},
  {path: 'platform-for-freshers',component:PlatformForFreshersComponent},
  {path: 'talent-outsourcing',component:TalentOutsourcingComponent},
  {path: 'training',component:TrainingComponent},  
  {path: 'gallery', component:GalleryComponent},
  {path: 'photo-gallery', component:PhotoGalleryComponent},
  {path: 'video-gallery', component:VideoGalleryComponent},
  {path: 'training', component:TrainingComponent},
  {path: 'online-training', component:OnlineTrainingComponent},
  {path: 'classroom-training', component:ClassroomTrainingComponent},
  {path: 'project-training', component:ProjectTrainingComponent},
  {path: 'corporate-training', component:CorporateTrainingComponent},
  {path: 'weekend-training', component:WeekendTrainingComponent},
  {path: 'workshop', component:WorkshopComponent},
  {path: 'tcs-ninja-test-preparation', component:TcsNinjaTestPreparationComponent},
  {path: 'youth-employeebility-program', component:YouthEmployeebilityProgramComponent},
  {path: 'contact-us', component:ContactUsComponent,
     children: [
    {
      path: 'legal-team', // Child route relative to parent
      component: LegalTeamComponent,
    }]},
  {path: 'bfs', component:BfsComponent},
  {path: 'life-science', component:LifescienceComponent},
  {path: 'message-from-ceo', component:CeoMessageComponent},
  {path: 'foundar-message', component:FoundarMessageComponent},
  {path: 'org-theme-video', component:OrgThemeVideoComponent},
  {path: 'employee-speak', component:EmployeeSpeakComponent},
  // {path: 'message-from-ceo', component:CeoMessageComponent},
  {path: 'work-culture', component:WorkCultureComponent},
  {path: 'legal-team', component:LegalTeamComponent},
  {path: 'management-team', component:ManagementTeamComponent},
  {path: 'developer-team', component:DeveloperTeamComponent},
  {path: 'webinars', component:WebinarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
