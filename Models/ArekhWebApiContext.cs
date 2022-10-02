using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TeamManagement.Models
{
    public partial class ArekhWebApiContext : DbContext
    {
        public ArekhWebApiContext()
        {
        }

        public ArekhWebApiContext(DbContextOptions<ArekhWebApiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmployeeTable> EmployeeTable { get; set; }
        public virtual DbSet<TeamDetails> TeamDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=W-H44PY03-0;Database=ArekhWebApi;User id=sa;Password=admin");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeTable>(entity =>
            {
                entity.HasKey(e => e.EmpId);
            });

            modelBuilder.Entity<TeamDetails>(entity =>
            {
                entity.HasKey(e => e.PlayerId)
                    .HasName("PK__Team_Det__4A4E74C81EB3E2B0");

                entity.ToTable("Team_Details");

                entity.Property(e => e.PlayerCountry)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PlayerImg).HasMaxLength(1);

                entity.Property(e => e.PlayerName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlayerSalary)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
