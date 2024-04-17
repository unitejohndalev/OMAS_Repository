package com.omasystem.omas.Entity;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // User ID

    private String username; // Username
    private String password; // Password

    // User role
    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (role == null) {
            return Collections.emptyList(); // Return an empty collection if role is null
        } else {
            return Collections.singleton(new SimpleGrantedAuthority(role.name()));
        }
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true; // Account non-expiration status
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true; // Account non-locked status
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Credentials non-expiration status
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true; // Account enabled status
    }
}
