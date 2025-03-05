import { Controller, Get, Render, Res } from '@nestjs/common';
import { DashboardService } from './modules/dashboard/dashboard.service';

@Controller()
export class AppController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  @Render('dashboard')
  async index() {
    const dashboardStats = await this.dashboardService.getDashboardStats();

    return {
      title: 'Dashboard',
      ...dashboardStats,
    };
  }

  @Get('/dashboard')
  @Render('dashboard')
  async dashboard() {
    const dashboardStats = await this.dashboardService.getDashboardStats();
    return {
      title: 'Dashboard',
      ...dashboardStats,
    };
  }

  @Get('/cadastrar_usuario')
  @Render('cadastrar_usuarios/cd_usuario')
  cadastrar_usuario() {
    return {};
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
