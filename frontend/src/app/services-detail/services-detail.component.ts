import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthStateService } from '../auth/auth-state.service';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  includes: { icon: string; label: string }[];
  process: { num: string; title: string; desc: string }[];
  pricing: { tier: string; price: string; featured: boolean; features: string[] }[];
  faqs: { q: string; a: string }[];
}

@Component({
  selector: 'app-services-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
})
export class ServicesDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private auth = inject(AuthStateService);

  readonly currentUser = this.auth.currentUser;
  activeTab = 0;
  activeProcess = 0;
  activeFaq = -1;
  mobileMenuOpen = false;
  currentService!: ServiceData;

  readonly services: ServiceData[] = [
    {
      id: 'thiet-ke-noi-that',
      title: 'Thiết Kế Nội Thất',
      subtitle: 'Không gian sống đẳng cấp',
      description: 'Chúng tôi mang đến giải pháp thiết kế nội thất toàn diện từ concept đến bản vẽ kỹ thuật chi tiết, phù hợp phong cách và ngân sách của bạn.',
      includes: [
        { icon: '🎨', label: 'Concept nội thất' },
        { icon: '📐', label: 'Mặt bằng bố trí' },
        { icon: '🖥️', label: 'Phối cảnh 3D' },
        { icon: '📋', label: 'Bản vẽ kỹ thuật' },
        { icon: '💰', label: 'Dự toán thi công' },
      ],
      process: [
        { num: '01', title: 'Khảo sát & tư vấn', desc: 'Tìm hiểu nhu cầu, phong cách, ngân sách và không gian thực tế của khách hàng qua buổi tư vấn trực tiếp.' },
        { num: '02', title: 'Lên ý tưởng thiết kế', desc: 'Đề xuất 2–3 phương án concept phù hợp phong cách, trình bày moodboard màu sắc và vật liệu.' },
        { num: '03', title: 'Thiết kế 3D & hoàn thiện', desc: 'Dựng phối cảnh 3D chi tiết, điều chỉnh theo góp ý khách hàng cho đến khi đạt sự đồng thuận.' },
        { num: '04', title: 'Triển khai bản vẽ kỹ thuật', desc: 'Xuất đầy đủ bộ bản vẽ thi công: mặt bằng, mặt đứng, chi tiết đồ gỗ, điện nước, MEP.' },
        { num: '05', title: 'Bàn giao & hỗ trợ', desc: 'Bàn giao hồ sơ thiết kế hoàn chỉnh, hỗ trợ giám sát thi công và tư vấn mua vật liệu.' },
      ],
      pricing: [
        { tier: 'Cơ Bản', price: '150.000 – 200.000', featured: false, features: ['Concept + moodboard', 'Mặt bằng 2D bố trí', '2–3 góc phối cảnh 3D', 'Bản vẽ kỹ thuật cơ bản', 'Dự toán sơ bộ'] },
        { tier: 'Trung Cấp', price: '250.000 – 350.000', featured: true, features: ['2 phương án concept', 'Mặt bằng 2D đầy đủ', '5–7 góc phối cảnh 3D', 'Bản vẽ kỹ thuật chi tiết', 'Dự toán chi tiết', 'Hỗ trợ giám sát thi công'] },
        { tier: 'Cao Cấp', price: '400.000 – 600.000', featured: false, features: ['3 phương án concept', 'Toàn bộ mặt bằng + MEP', 'Phối cảnh 3D không giới hạn', 'Bản vẽ kỹ thuật toàn diện', 'Dự toán & giám sát trọn gói', 'Chỉnh sửa không giới hạn', 'Bảo hành thiết kế 12 tháng'] },
      ],
      faqs: [
        { q: 'Chi phí thiết kế nội thất được tính như thế nào?', a: 'Chi phí thiết kế được tính theo đơn vị đồng/m² diện tích sàn, tùy gói dịch vụ và độ phức tạp của dự án.' },
        { q: 'Thời gian hoàn thành hồ sơ thiết kế mất bao lâu?', a: 'Thông thường từ 4–8 tuần tùy quy mô dự án. Gói cơ bản khoảng 3–4 tuần, gói cao cấp 6–8 tuần.' },
        { q: 'Tôi có thể yêu cầu chỉnh sửa không?', a: 'Có. Mỗi gói đều bao gồm số lần chỉnh sửa nhất định. Gói cao cấp hỗ trợ chỉnh sửa không giới hạn.' },
        { q: 'Đồng Tâm có thi công theo thiết kế không?', a: 'Có. Chúng tôi cung cấp dịch vụ thi công trọn gói hoặc giám sát thi công theo hồ sơ thiết kế đã được duyệt.' },
      ]
    },
    {
      id: 'thi-cong-lap-rap',
      title: 'Thi Công & Lắp Ráp',
      subtitle: 'Thi công chuyên nghiệp, đúng tiến độ',
      description: 'Đội ngũ thợ lành nghề với hơn 10 năm kinh nghiệm, đảm bảo chất lượng thi công vượt trội và bàn giao đúng tiến độ cam kết.',
      includes: [
        { icon: '🔨', label: 'Thi công hoàn thiện' },
        { icon: '🪵', label: 'Đồ gỗ nội thất' },
        { icon: '💡', label: 'Điện & chiếu sáng' },
        { icon: '🔧', label: 'Cơ điện lạnh' },
        { icon: '🛡️', label: 'Bảo hành công trình' },
      ],
      process: [
        { num: '01', title: 'Khảo sát thực địa', desc: 'Đo đạc, đánh giá hiện trạng công trình, xác định phạm vi thi công và lên kế hoạch triển khai.' },
        { num: '02', title: 'Lập dự toán & ký hợp đồng', desc: 'Lập bảng dự toán chi tiết theo hồ sơ thiết kế, thương thảo và ký kết hợp đồng thi công.' },
        { num: '03', title: 'Triển khai thi công', desc: 'Thi công theo đúng bản vẽ, đảm bảo tiến độ và chất lượng vật liệu theo tiêu chuẩn cam kết.' },
        { num: '04', title: 'Kiểm tra & nghiệm thu', desc: 'Kiểm tra chất lượng từng hạng mục, khắc phục lỗi phát sinh và nghiệm thu từng giai đoạn.' },
        { num: '05', title: 'Bàn giao & bảo hành', desc: 'Bàn giao công trình hoàn chỉnh, vệ sinh, bảo hành toàn bộ hạng mục theo hợp đồng.' },
      ],
      pricing: [
        { tier: 'Tiết Kiệm', price: '2.500.000 – 3.500.000', featured: false, features: ['Vật liệu phổ thông', 'Thi công cơ bản', 'Giám sát định kỳ', 'Bảo hành 12 tháng'] },
        { tier: 'Tiêu Chuẩn', price: '4.000.000 – 6.000.000', featured: true, features: ['Vật liệu trung – cao cấp', 'Thi công hoàn thiện', 'Giám sát thường xuyên', 'Bảo hành 24 tháng', 'Hỗ trợ mua vật tư'] },
        { tier: 'Cao Cấp', price: '7.000.000 – 12.000.000', featured: false, features: ['Vật liệu nhập khẩu', 'Thi công trọn gói', 'Giám sát toàn thời gian', 'Bảo hành 36 tháng', 'Thiết kế + thi công', 'Cam kết tiến độ'] },
      ],
      faqs: [
        { q: 'Thời gian thi công một căn hộ mất bao lâu?', a: 'Căn hộ 60–100m² thường mất 45–60 ngày. Biệt thự lớn có thể 3–6 tháng tùy phạm vi công việc.' },
        { q: 'Vật liệu thi công có được bảo đảm chất lượng?', a: 'Có. Tất cả vật liệu đều có hóa đơn, chứng từ xuất xứ rõ ràng và được nghiệm thu trước khi sử dụng.' },
        { q: 'Có phát sinh chi phí ngoài hợp đồng không?', a: 'Chi phí phát sinh chỉ xảy ra khi có yêu cầu thay đổi từ khách hàng và phải được xác nhận bằng văn bản.' },
        { q: 'Bảo hành công trình như thế nào?', a: 'Chúng tôi bảo hành từ 12–36 tháng tùy gói. Trong thời gian bảo hành, mọi hư hỏng do lỗi thi công được sửa miễn phí.' },
      ]
    },
  ];

  readonly navServices = [
    { id: 'thiet-ke-noi-that', label: 'Thiết kế nội thất' },
    { id: 'thi-cong-lap-rap', label: 'Thi công & lắp ráp' },
    { id: 'tu-van-mien-phi', label: 'Tư vấn miễn phí' },
    { id: 'noi-that-theo-yeu-cau', label: 'Nội thất theo yêu cầu' },
    { id: 'cai-tao-nang-cap', label: 'Cải tạo & nâng cấp' },
    { id: 'bao-hanh-bao-tri', label: 'Bảo hành & bảo trì' },
  ];

  ngOnInit(): void {
    this.auth.checkAuthStatus();
    if (!this.auth.isAuthenticated()) { this.router.navigate(['/login']); return; }
    this.route.paramMap.subscribe(p => {
      const id = p.get('id') || 'thiet-ke-noi-that';
      this.currentService = this.services.find(s => s.id === id) || this.services[0];
      this.activeProcess = 0; this.activeFaq = -1;
    });
  }

  goService(id: string) { this.router.navigate(['/services', id]); }
  toggleFaq(i: number) { this.activeFaq = this.activeFaq === i ? -1 : i; }
  logout() { this.auth.logout(); this.router.navigate(['/login']); }
  goHome() { this.router.navigate(['/home']); }
}
