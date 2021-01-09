//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Register
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Register()
        {
            this.EMICard = new HashSet<EMICard>();
        }
    
        public string Name { get; set; }
        public string email { get; set; }
        public string Phone_No { get; set; }
        public string username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public bool Card_Type { get; set; }
        public Nullable<bool> Fees_Paid { get; set; }
        public Nullable<int> Account_Number { get; set; }
    
        public virtual BankDetails BankDetails { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EMICard> EMICard { get; set; }
    }
}